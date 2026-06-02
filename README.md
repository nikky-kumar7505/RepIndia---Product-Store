Here's the complete `README.md` file for you to copy and paste:

```markdown
# 🛍️ RepIndia Product Store Assignment

A responsive e-commerce product listing application built with modern web technologies for the RepIndia assignment.

🔗 **Live Demo:** [https://nikky-kumar7505.github.io/RepIndia---Product-Store/](https://nikky-kumar7505.github.io/RepIndia---Product-Store/)

## 🚀 Features Implemented

✅ **Product Listing Page**
- Responsive grid layout (1-5 columns based on screen size)
- Product cards with image, title, price, category, and rating
- Search functionality
- Category filtering
- Price sorting (low-to-high, high-to-low)
- Pagination (10 products per page)

✅ **Product Detail Page**
- Full product information display
- Back navigation
- Responsive design

✅ **Technical Stack**
- React + TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- GitHub Pages for hosting

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React + TypeScript | Frontend framework with type safety |
| Redux Toolkit | State management |
| Tailwind CSS | Utility-first styling |
| React Router | Client-side routing |
| FakeStore API | Mock e-commerce API |

## 📁 Project Structure

```
src/
├── components/
│   ├── Products.tsx
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── SortFilter.tsx
│   └── Pagination.tsx
├── pages/
│   └── ProductDetail.tsx
├── store/
│   ├── store.ts
│   └── slices/productSlice.ts
├── types/
│   └── product.ts
├── App.tsx
└── main.tsx
```

## 🏁 How to Run Locally

```bash
git clone https://github.com/nikky-kumar7505/RepIndia---Product-Store.git
cd RepIndia---Product-Store
npm install
npm run dev
```

## 🌐 Deployment

```bash
npm install gh-pages --save-dev
npm run deploy
```

## 📝 Assignment Requirements Met

| Requirement | Status |
|-------------|--------|
| Responsive Product Listing Page | ✅ |
| Product Image, Name, Price, Category, Rating | ✅ |
| Search Products | ✅ |
| Category Filter | ✅ |
| Sort by Price | ✅ |
| Pagination (10 records) | ✅ |
| Product Detail Page | ✅ |
| React + TypeScript + Redux Toolkit + Tailwind CSS | ✅ |

## 🔗 API Used

[FakeStore API](https://fakestoreapi.com/products) - Free mock e-commerce API
```