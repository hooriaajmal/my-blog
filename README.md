# My Personal Blog

A modern, responsive personal blog built with React and Vite, featuring a clean design and powerful filtering capabilities. This blog showcases articles across multiple categories including Technology, Travel, and Food.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Search Functionality**: Real-time search through blog posts
- **Category Filtering**: Filter posts by category (Tech, Travel, Food)
- **Pagination**: Navigate through posts with a clean pagination system
- **Modern UI**: Clean and intuitive user interface with Lucide React icons
- **Fast Performance**: Built with Vite for optimal development and build performance


![Hero](https://github.com/hooriaajmal/my-blog/blob/main/src/assets/blog1.png)
![Hero2](./assets/screenshots/blog2.png)


## Filtered by Travel

![Filtered](./assets/screenshots/blog3.png)


## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Icons**: Lucide React 0.536.0
- **Linting**: ESLint 9.30.1
- **Language**: JavaScript (JSX)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check your Node.js version by running:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hooriaajmal/my-blog.git
cd my-blog
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is occupied).

### 4. Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my-blog/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/        # React components
│   │   ├── CategoryFilter.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   ├── PostCard.jsx
│   │   ├── posts.jsx      # Blog posts data
│   │   └── SearchBar.jsx
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 🎨 Features in Detail

### Search Functionality
- Real-time search through blog post titles
- Case-insensitive search
- Instant filtering as you type

### Category Filtering
- Filter posts by category: All, Tech, Travel, Food
- Dynamic category selection
- Combines with search functionality

### Pagination
- 6 posts per page
- Responsive pagination controls
- Automatic page reset when filters change

### Responsive Design
- Mobile-first approach
- Grid layout that adapts to screen size
- Optimized for desktop, tablet, and mobile devices

## 📝 Adding New Blog Posts

To add new blog posts, edit the `src/components/posts.jsx` file:

```javascript
export const blogPosts = [
  {
    id: 11, // Unique ID
    title: "Your New Post Title",
    category: "Tech", // Must be one of: "Tech", "Travel", "Food"
    date: "2024-08-01", // YYYY-MM-DD format
    description: "Your post description here...",
    image: "https://your-image-url.com/image.jpg",
    readTime: "5 min read"
  },
  // ... existing posts
];
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying Tailwind classes in components
- Adding custom CSS in `src/index.css`
- Updating the color scheme and typography

### Categories
To add new categories:
1. Add the category name to the `categories` array in `posts.jsx`
2. Update the CategoryFilter component if needed
3. Add posts with the new category

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Deploy to Netlify
1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Deploy to GitHub Pages
1. Add this to your `package.json`:
```json
{
  "homepage": "https://hooriaajmal.github.io/my-blog",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request


## 👤 Author

**Your Name**
- GitHub: [@hooriaajmal](https://github.com/hooriaajmal)
- Email: hooriaajmal9@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Unsplash](https://unsplash.com/) - Beautiful free images for the blog posts

---

⭐ If you found this project helpful, please give it a star on GitHub!
