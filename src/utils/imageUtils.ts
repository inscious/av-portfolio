// Import your images here
import portfolioImg1 from "../assets/images/plus.jpg";
import portfolioImg2 from "../assets/images/senko.jpg";
import portfolioImg3 from "../assets/images/avalabs-1.jpeg";
import portfolioImg4 from "../assets/images/sample1.jpg";
import portfolioImg5 from "../assets/images/sample2.jpg"; // Note the uppercase JPG to match your file
import portfolioImg6 from "../assets/images/sample3.jpg";

import aboutImg from "../assets/images/about.jpeg"; // Changed to .jpeg if that's what you have
import avatarImg from "../assets/images/avatar.jpg";

// If any of these imports shows an error, you may need to create placeholder files
// or replace with actual paths to your image files

// Export a images object to use throughout your app
export const images = {
    portfolio: {
        av1: portfolioImg1,
        av2: portfolioImg2,
        av3: portfolioImg3,
        av4: portfolioImg4,
        combined1: portfolioImg5,
        combined2: portfolioImg6,
    },
    about: aboutImg,
    avatar: avatarImg,
};

// Type-safe helper to get portfolio images by index
export const getPortfolioImage = (index: number): string => {
    const portfolioImages = Object.values(images.portfolio);
    // Return the image at the index, or the first image if index is out of bounds
    return portfolioImages[index] || portfolioImages[0];
};

// You can add more helper functions as needed
