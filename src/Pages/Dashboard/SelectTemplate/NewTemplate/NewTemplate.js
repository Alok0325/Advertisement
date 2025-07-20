import React, { useState } from 'react';
import './NewTemplate.css';

const NewTemplate = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateType, setTemplateType] = useState('IMAGE');
  const [templateContent, setTemplateContent] = useState('');
  const [category, setCategory] = useState('UTILITY');
  const [headerText, setHeaderText] = useState('');
  const [footerText, setFooterText] = useState('');
  const [language, setLanguage] = useState('en');
  const [variables, setVariables] = useState([]);
  const [exampleValues, setExampleValues] = useState({});
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [mediaError, setMediaError] = useState('');

  const handleCreateTemplate = () => {
    if (templateName.trim() && templateContent.trim()) {
      console.log('Creating template:', {
        name: templateName,
        type: templateType,
        content: templateContent,
        category: category,
        header: headerText,
        footer: footerText,
        language: language,
        variables: variables,
        examples: exampleValues,
        mediaFile: mediaFile ? {
          name: mediaFile.name,
          size: mediaFile.size,
          type: mediaFile.type
        } : null
      });

      // Reset form
      setTemplateName('');
      setTemplateContent('');
      setHeaderText('');
      setFooterText('');
      setVariables([]);
      setExampleValues({});
      removeMedia();
    }
  };

  const addVariable = () => {
    const newVar = `{{${variables.length + 1}}}`;
    setVariables([...variables, newVar]);
    setExampleValues({ ...exampleValues, [newVar]: '' });
  };

  const loadSampleTemplate = (type) => {
    const samples = {
      welcome: {
        name: 'welcome_message_01',
        category: 'UTILITY',
        header: 'Welcome to {{company_name}}',
        content: 'Hello {{customer_name}}, welcome to {{company_name}}! Your account has been successfully created. We look forward to serving you.',
        footer: 'Reply STOP to unsubscribe',
        variables: ['{{customer_name}}', '{{company_name}}'],
        examples: {
          '{{customer_name}}': 'John Doe',
          '{{company_name}}': 'TechStore'
        }
      },
      order: {
        name: 'order_confirmation_01',
        category: 'UTILITY',
        header: 'Order Confirmation',
        content: 'Hi {{customer_name}}, your order {{order_id}} has been confirmed. Expected delivery: {{delivery_date}}. Track your order at {{tracking_url}}',
        footer: 'Thank you for shopping with us!',
        variables: ['{{customer_name}}', '{{order_id}}', '{{delivery_date}}', '{{tracking_url}}'],
        examples: {
          '{{customer_name}}': 'Alice Smith',
          '{{order_id}}': 'ORD-12345',
          '{{delivery_date}}': 'July 15, 2025',
          '{{tracking_url}}': 'track.example.com/ORD-12345'
        }
      },
      appointment: {
        name: 'appointment_reminder_01',
        category: 'UTILITY',
        header: 'Appointment Reminder',
        content: 'Dear {{patient_name}}, this is a reminder for your appointment with {{doctor_name}} on {{appointment_date}} at {{appointment_time}}.',
        footer: 'Please arrive 15 minutes early',
        variables: ['{{patient_name}}', '{{doctor_name}}', '{{appointment_date}}', '{{appointment_time}}'],
        examples: {
          '{{patient_name}}': 'Robert Johnson',
          '{{doctor_name}}': 'Dr. Sarah Wilson',
          '{{appointment_date}}': 'July 20, 2025',
          '{{appointment_time}}': '2:30 PM'
        }
      },
      marketing: {
        name: 'summer_sale_01',
        category: 'MARKETING',
        header: '🎉 Summer Sale Alert!',
        content: 'Hi {{customer_name}}! Enjoy up to {{discount_percentage}}% off on all products. Use code {{promo_code}} at checkout. Offer valid till {{expiry_date}}.',
        footer: 'Reply STOP to opt out',
        variables: ['{{customer_name}}', '{{discount_percentage}}', '{{promo_code}}', '{{expiry_date}}'],
        examples: {
          '{{customer_name}}': 'Emma Davis',
          '{{discount_percentage}}': '50',
          '{{promo_code}}': 'SUMMER50',
          '{{expiry_date}}': 'July 31, 2025'
        }
      },
      otp: {
        name: 'otp_verification_01',
        category: 'AUTHENTICATION',
        header: 'Verification Code',
        content: 'Your verification code is {{otp_code}}. This code will expire in {{expiry_minutes}} minutes. Do not share this code with anyone.',
        footer: 'Secure your account',
        variables: ['{{otp_code}}', '{{expiry_minutes}}'],
        examples: {
          '{{otp_code}}': '123456',
          '{{expiry_minutes}}': '10'
        }
      }
    };

    const sample = samples[type];
    if (sample) {
      setTemplateName(sample.name);
      setCategory(sample.category);
      setHeaderText(sample.header);
      setTemplateContent(sample.content);
      setFooterText(sample.footer);
      setVariables(sample.variables);
      setExampleValues(sample.examples);
    }
  };

  const updateExampleValue = (variable, value) => {
    setExampleValues({ ...exampleValues, [variable]: value });
  };

  const getPreviewContent = (text) => {
    let content = text || templateContent || 'Your template content will appear here...';

    if (Array.isArray(variables)) {
      variables.forEach((v) => {
        const example = exampleValues[v] || v.replace(/[{}]/g, '');
        content = content.replace(new RegExp(v, 'g'), example);
      });
    }

    return content;
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Reset previous errors
    setMediaError('');
    
    // File size validation (in bytes)
    const maxSize = templateType === 'IMAGE' 
      ? 5 * 1024 * 1024  // 5MB
      : templateType === 'VIDEO'
      ? 16 * 1024 * 1024  // 16MB
      : 100 * 1024 * 1024;  // 100MB

    if (file.size > maxSize) {
      setMediaError(`File size exceeds limit. Max size: ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    // File type validation
    const validTypes = {
      IMAGE: ['image/jpeg', 'image/png', 'image/jpg'],
      VIDEO: ['video/mp4', 'video/3gp'],
      DOCUMENT: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    };

    if (!validTypes[templateType]?.includes(file.type)) {
      setMediaError(`Invalid file type. Please upload ${templateType.toLowerCase()} files only.`);
      return;
    }

    setMediaFile(file);
    
    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setMediaPreview(previewUrl);
  };

  const removeMedia = () => {
    if (mediaPreview) {
      URL.revokeObjectURL(mediaPreview);
    }
    setMediaFile(null);
    setMediaPreview(null);
    setMediaError('');
  };

  return (
    <div className="new-template-container">
      {/* Page Header */}
      <div className="new-template-header">
        <h2>Create New Template</h2>
        <p>Design your custom WhatsApp template for business messaging</p>
      </div>

      <div className="template-form-container">
        {/* Left Column - Form Fields */}
        <div className="form-section">
          {/* Template Category */}
          <div className="form-group">
            <label>Template Category *</label>
            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="UTILITY">UTILITY - Transactional messages, updates, alerts</option>
              <option value="MARKETING">MARKETING - Promotional offers, product launches</option>
              <option value="AUTHENTICATION">AUTHENTICATION - OTP, verification codes</option>
            </select>
            <small className="form-help">Choose carefully - this affects approval time and usage restrictions.</small>
          </div>

          {/* Template Name */}
          <div className="form-group">
            <label>Template Name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., welcome_message_01, order_confirmation, appointment_reminder"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              maxLength="512"
            />
            <small className="form-help">
              Use lowercase letters, numbers, and underscores only. Max 512 characters.
            </small>
          </div>

          <div className="form-group">
            <label>Quick Templates</label>
            <div className="sample-templates">
              <button type="button" className="sample-btn" onClick={() => loadSampleTemplate('welcome')}>
                Welcome Message
              </button>
              <button type="button" className="sample-btn" onClick={() => loadSampleTemplate('order')}>
                Order Confirmation
              </button>
              <button type="button" className="sample-btn" onClick={() => loadSampleTemplate('appointment')}>
                Appointment Reminder
              </button>
              <button type="button" className="sample-btn" onClick={() => loadSampleTemplate('marketing')}>
                Marketing Offer
              </button>
              <button type="button" className="sample-btn" onClick={() => loadSampleTemplate('otp')}>
                OTP Verification
              </button>
            </div>
            <small className="form-help">
              Click to load pre-built templates with sample content and variables
            </small>
          </div>

          {/* Template Type */}
          <div className="form-group">
            <label>Template Type *</label>
            <select className="form-select" value={templateType} onChange={(e) => setTemplateType(e.target.value)}>
              <option value="TEXT">TEXT - Plain text message</option>
              <option value="IMAGE">IMAGE - Image with caption</option>
              <option value="VIDEO">VIDEO - Video with caption</option>
              <option value="DOCUMENT">DOCUMENT - PDF, DOC, etc.</option>
              <option value="LOCATION">LOCATION - Location sharing</option>
              <option value="CONTACT">CONTACT - Contact card sharing</option>
            </select>
            <small className="form-help">Choose the media type for your template.</small>
          </div>

          {/* Template Header */}
          <div className="form-group">
            <label>Header (Optional)</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Welcome to {{company_name}}"
              value={headerText}
              onChange={(e) => setHeaderText(e.target.value)}
              maxLength="60"
            />
            <small className="form-help">
              Appears at the top of the message. Use {'{{variable}}'} for dynamic content. Max 60 characters.
            </small>
          </div>

          {/* Template Format */}
          <div className="form-group">
            <label>Template Format *</label>
            <textarea
              className="form-textarea"
              placeholder="Hello {{customer_name}}, your order {{order_id}} has been confirmed. Expected delivery: {{delivery_date}}. Track at {{tracking_url}}"
              rows="4"
              value={templateContent}
              onChange={(e) => setTemplateContent(e.target.value)}
              maxLength="1024"
            />
            <small className="form-help">
              Main message content. Use {'{{variable}}'} placeholders for dynamic data. Max 1024 characters.
            </small>
          </div>

          {/* Sample Values */}
          <div className="form-group">
            <label>Sample Values</label>
            <div className="variables-section">
              <button type="button" className="btn-add-variable" onClick={addVariable}>
                + Add Variable
              </button>
              {variables.map((variable, index) => (
                <div key={index} className="variable-input">
                  <span className="variable-name">{variable}</span>
                  <input
                    type="text"
                    placeholder={`Example value for ${variable}`}
                    value={exampleValues[variable] || ''}
                    onChange={(e) => updateExampleValue(variable, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <small className="form-help">
              Add variables like {'{{customer_name}}'}, {'{{order_id}}'}, {'{{amount}}'} etc. These will be replaced with actual values when sending.
            </small>
          </div>

          {/* Template Footer */}
          <div className="form-group">
            <label>Footer (Optional)</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Reply STOP to unsubscribe"
              value={footerText}
              onChange={(e) => setFooterText(e.target.value)}
              maxLength="60"
            />
            <small className="form-help">
              Appears at the bottom. Use for disclaimers or opt-out instructions. Max 60 characters.
            </small>
          </div>

          {/* Interactive Action */}
          <div className="form-group">
            <label>Interactive Action Buttons (Optional)</label>
            <div className="action-buttons-section">
              <div className="action-buttons-header">
                <span>Add interactive buttons to your template</span>
                <button type="button" className="btn-add-action" onClick={() => {}}>
                  + Add Button
                </button>
              </div>
              <div className="action-buttons-list">
                <div className="action-button-item">
                  <select className="form-select">
                    <option value="">Select button type</option>
                    <option value="QUICK_REPLY">Quick Reply</option>
                    <option value="URL">Visit Website</option>
                    <option value="PHONE_NUMBER">Call Phone</option>
                  </select>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Button text (max 20 chars)"
                    maxLength="20"
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Button action (URL/Phone)"
                  />
                  <button type="button" className="btn-remove-action">×</button>
                </div>
              </div>
              <small className="form-help">
                Add up to 3 buttons. Quick Reply buttons allow instant responses, URL buttons open websites, and Phone buttons initiate calls.
              </small>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button className="btn-secondary">Save as Draft</button>
            <button className="btn-primary" onClick={handleCreateTemplate}>
              Submit for Approval
            </button>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="preview-section">
          <h3>Template Preview</h3>
          <div className="preview-card">
            <div className="preview-header">
              <span className="preview-label">Template Preview</span>
              <span className="preview-type">{templateType}</span>
            </div>

            {headerText && <div className="preview-header-text">{getPreviewContent(headerText)}</div>}

            <div className="preview-content">{getPreviewContent()}</div>

            {templateType !== 'TEXT' && (
              <div className="preview-media">
                <div className="media-placeholder">
                  <span>{templateType} Preview</span>
                </div>
              </div>
            )}

            {footerText && <div className="preview-footer-text">{getPreviewContent(footerText)}</div>}

            <div className="preview-meta">
              {templateName && <span className="preview-name">Name: {templateName}</span>}
              <span className="preview-category">Category: {category}</span>
              <span className="preview-language">Language: {language}</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="form-disclaimer">
            <h4>Important Disclaimers:</h4>
            <ul>
              <li>Templates must comply with WhatsApp Business Policy and Commerce Policy</li>
              <li>UTILITY templates cannot contain promotional content</li>
              <li>MARKETING templates must include clear opt-out instructions</li>
              <li>All templates require WhatsApp approval before use (24-48 hours)</li>
              <li>Template names cannot be changed after creation</li>
              <li>Variables must be in format {'{{variable_name}}'} and cannot contain spaces</li>
              <li>URLs in templates must be static (no dynamic URLs allowed)</li>
              <li>Phone numbers must include country code (e.g., +91XXXXXXXXXX)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTemplate;
