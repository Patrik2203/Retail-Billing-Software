import './loginCredentials.css';

const LoginCredentials = ({ onCredentialClick }) => {
    const credentials = [
        {
            type: 'Admin',
            email: 'admin@demo.com',
            password: 'admin123',
            icon: '👨‍💼',
            description: 'Full access to all features'
        },
        {
            type: 'User',
            email: 'user@demo.com',
            password: 'user123',
            icon: '👤',
            description: 'Limited access for regular users'
        }
    ];

    const handleCredentialClick = (credential) => {
        if (onCredentialClick) {
            onCredentialClick(credential.email, credential.password);
        }
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        // You can add a toast notification here if needed
    };

    return (
        <div className="login-credentials-container">
            <div className="demo-banner">
                <h6 className="demo-title">
                    <span className="demo-icon">🚀</span>
                    Demo Credentials
                </h6>
                <p className="demo-subtitle">Click on any credential to auto-fill the form</p>
            </div>
            
            <div className="credentials-grid">
                {credentials.map((credential, index) => (
                    <div 
                        key={index} 
                        className="credential-card"
                        onClick={() => handleCredentialClick(credential)}
                    >
                        <div className="credential-header">
                            <span className="credential-icon">{credential.icon}</span>
                            <span className="credential-type">{credential.type}</span>
                        </div>
                        
                        <div className="credential-details">
                            <div className="credential-field">
                                <small className="field-label">Email:</small>
                                <div className="field-value">
                                    <span>{credential.email}</span>
                                    <button 
                                        type="button"
                                        className="copy-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            copyToClipboard(credential.email, 'email');
                                        }}
                                        title="Copy email"
                                    >
                                        📋
                                    </button>
                                </div>
                            </div>
                            
                            <div className="credential-field">
                                <small className="field-label">Password:</small>
                                <div className="field-value">
                                    <span>{credential.password}</span>
                                    <button 
                                        type="button"
                                        className="copy-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            copyToClipboard(credential.password, 'password');
                                        }}
                                        title="Copy password"
                                    >
                                        📋
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="credential-description">
                            <small>{credential.description}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoginCredentials;
