import React from 'react';

const App = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark p-3">
            <BootstrapCard />
        </div>
    );
}

const BootstrapCard = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    // Apply basic shadow for the resting state
    const cardClasses = "card rounded-4 border-0 shadow-lg"; 
    
    // Custom premium colors
    const premiumAccentColor = '#FFD700'; // Gold for category
    const premiumButtonColor = '#4A148C'; // Deep Royal Purple
    const premiumButtonHoverColor = '#6A1B9A'; // Slightly lighter purple on hover

    return (
        <div 
            className={cardClasses}
            style={{ 
                maxWidth: '24rem',
                // Custom CSS for smooth transition
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)', // Lift effect
                // Enhanced shadow on hover for advanced look
                boxShadow: isHovered ? '0 1rem 3rem rgba(0, 0, 0, 0.4)' : '0 0.5rem 1rem rgba(0, 0, 0, 0.15)', 
                cursor: 'pointer',
                overflow: 'hidden' 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image with Overlay Badge */}
            <div className="position-relative">
                <img 
                    src="https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" 
                    className="card-img-top rounded-top-4" 
                    alt="Product Image" 
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/212529/ffffff?text=Image+Missing" }}
                />
                {/* Advanced Feature Badge - Gold for premium accent */}
                <span 
                    className="badge rounded-pill position-absolute top-0 start-0 m-3 fs-6 p-2"
                    style={{ backgroundColor: premiumAccentColor, color: '#4A148C' }} // Gold background, deep purple text
                >
                    Skeleton Loading
                </span>
            </div>
            
            <div className="card-body p-4">
                {/* Metadata / Category - Gold accent */}
                <p 
                    className="text-uppercase fw-bold small mb-1"
                    style={{ color: premiumAccentColor }}
                >
                    Featured Product
                </p>

                <h4 
                    className="card-title h4 fw-bold text-dark mb-2"
                >
                    Premium Edition
                </h4>
                <p 
                    className="card-text text-secondary mb-4"
                >
                    This component showcases a modern, premium design with a clear hierarchy and subtle interactivity.
                </p>
                
                {/* Full-width Call-to-Action - Deep Purple/Indigo */}
                <div className="mt-3 d-grid">
                    <button 
                        className="btn fw-bold text-uppercase"
                        // Custom button styles for premium look
                        style={{ 
                            backgroundColor: isHovered ? premiumButtonHoverColor : premiumButtonColor, 
                            borderColor: premiumButtonColor, 
                            color: 'white',
                            transition: 'background-color 0.3s ease-in-out'
                        }}
                    >
                        View Full Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
