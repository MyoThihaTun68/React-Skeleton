import React from 'react';

// === Skeleton Component for Loading State ===
const Skeleton = () => {
    // Custom CSS for the skeleton loading animation
    const skeletonStyles = `
        @keyframes pulse-bg {
            0% {
                background-color: rgba(68, 72, 77, 0.9); /* Darker shade */
            }
            50% {
                background-color: rgba(99, 102, 106, 0.9); /* Lighter shade for pulse */
            }
            100% {
                background-color: rgba(68, 72, 77, 0.9);
            }
        }
        .skeleton-block {
            animation: pulse-bg 1.5s infinite ease-in-out;
            border-radius: 0.5rem;
        }
        .skeleton-image {
            height: 200px; /* Mimics the image height */
            border-radius: 0.5rem 0.5rem 0 0;
        }
        .skeleton-title {
            height: 1.5rem;
            width: 70%;
            margin-bottom: 0.75rem;
        }
        .skeleton-text-line {
            height: 0.75rem;
            margin-bottom: 0.5rem;
        }
        .skeleton-button {
            height: 2.5rem;
            width: 100%;
        }
    `;

    return (
        <div 
            className="card rounded-4 border-0 shadow-lg"
            style={{ 
               width: '24rem',
                backgroundColor: '#212529', // Dark card background to match theme
                padding: '1.5rem', 
            }}
        >
            <style>{skeletonStyles}</style>

            {/* Simulated Image Block */}
            <div className="skeleton-block skeleton-image mb-4"></div>

            {/* Simulated Category Block */}
            <div className="skeleton-block" style={{ height: '0.75rem', width: '30%', marginBottom: '1rem' }}></div>

            {/* Simulated Title Block */}
            <div className="skeleton-block skeleton-title"></div>

            {/* Simulated Text Content */}
            <div className="card-body p-0 pt-3">
                <div className="skeleton-block skeleton-text-line" style={{ width: '90%' }}></div>
                <div className="skeleton-block skeleton-text-line" style={{ width: '95%' }}></div>
                <div className="skeleton-block skeleton-text-line" style={{ width: '80%' }}></div>
            </div>

            {/* Simulated Button Block */}
            <div className="mt-4">
                <div className="skeleton-block skeleton-button"></div>
            </div>
        </div>
    );
}
export default Skeleton;