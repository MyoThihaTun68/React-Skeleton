import React, { useState, useEffect } from 'react';
import Card from './assets/components/Card';
import Skeleton from './assets/components/Skeleton';  
// === App Component (Main Logic) ===
const App = () => {
    // Renamed from 'loading' to 'isLoading' for clarity
    const [isLoading, setIsLoading] = useState(true);

    // Effect to simulate data fetching delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3-second delay

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        // This container centers the content (Card or Skeleton) both horizontally and vertically
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark p-3">
            {/* Conditional Rendering: If loading, show Skeleton, otherwise show LoadedCard */}
            {isLoading ? <Skeleton /> : <Card />}
        </div>
    );
}

export default App;
