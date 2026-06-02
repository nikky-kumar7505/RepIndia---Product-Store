import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/product";

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: string;
  sortOrder: string;
  currentPage: number;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  searchQuery: "",
  selectedCategory: "all",
  sortOrder: "",
  currentPage: 1,
};

// Fetch products from API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data as Product[];
  }
);

// Helper function to apply filters
const applyFilters = (state: ProductState) => {
  let result = [...state.products];

  // Search filter
  if (state.searchQuery) {
    result = result.filter((p) =>
      p.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }

  // Category filter
  if (state.selectedCategory !== "all") {
    result = result.filter((p) => p.category === state.selectedCategory);
  }

  // Sort filter
  if (state.sortOrder === "low-to-high") {
    result.sort((a, b) => a.price - b.price);
  } else if (state.sortOrder === "high-to-low") {
    result.sort((a, b) => b.price - a.price);
  }

  state.filteredProducts = result;
  state.currentPage = 1;
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      applyFilters(state);
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      applyFilters(state);
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
      applyFilters(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setSortOrder,
  setCurrentPage,
} = productSlice.actions;

export default productSlice.reducer;