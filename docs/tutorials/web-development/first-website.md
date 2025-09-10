---
title: "Building Your First Website"
description: "Learn web development fundamentals with HTML, CSS, and JavaScript"
date: "2025-01-01"
difficulty: "Beginner"
---

# Building Your First Website

Ready to create your first website? This tutorial will guide you through building a simple but impressive personal website using HTML, CSS, and JavaScript.

## What You'll Build

By the end of this tutorial, you'll have:
- A responsive personal website
- Interactive navigation
- Smooth animations
- Mobile-friendly design

## Prerequisites

- Basic text editor or VS Code
- Web browser
- No prior coding experience needed!

## Step 1: HTML Structure

Let's start with the foundation. Create a file called `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Developer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <h1>Your Name</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home" class="hero">
            <h2>Welcome to My Website</h2>
            <p>I'm a high school coder passionate about technology!</p>
            <button class="cta-button">Get In Touch</button>
        </section>
        
        <section id="about">
            <h2>About Me</h2>
            <p>Tell your story here...</p>
        </section>
        
        <section id="projects">
            <h2>My Projects</h2>
            <div class="project-grid">
                <!-- Projects will go here -->
            </div>
        </section>
        
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Let's connect!</p>
        </section>
    </main>
    
    <script src="script.js"></script>
</body>
</html>
```

## Step 2: CSS Styling

Create `style.css` to make it look amazing:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 2rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

nav ul li a:hover {
    opacity: 0.8;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 8rem 2rem;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.cta-button {
    background: white;
    color: #667eea;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: scale(1.05);
}

section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

section h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
}
```

## Step 3: JavaScript Interactivity

Create `script.js` for smooth scrolling:

```javascript
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.9)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});
```

## Step 4: Make It Your Own

Now customize your website:

1. Replace "Your Name" with your actual name
2. Add your photo and bio in the About section
3. Showcase your coding projects
4. Add your contact information and social links

## Next Steps

Want to take it further? Try:
- Adding more animations with CSS
- Creating a blog section
- Integrating with GitHub to show your repositories
- Deploying to GitHub Pages or Netlify

## Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Complete web development reference
- [CSS-Tricks](https://css-tricks.com/) - CSS tips and tricks
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial

Great job! You've built your first website. Keep experimenting and building! 🚀