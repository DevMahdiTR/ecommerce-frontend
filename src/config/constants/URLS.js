export const BaseUrl = 'http://localhost:8080/api/v1';

export const APIS = {

    AUTH: {
        login: '/auth/login',
        register: '/auth/register',
        refreshToken: (refreshToken) => `/refresh/${refreshToken}`,
        logout : '/auth/logout',
    },

    CATEGORIES: {
        createCategory: '/categories',
        updateCategory: (categoryId) => `/categories/${categoryId}`,
        addSubCategory: (categoryId) => `/categories/${categoryId}/subcategories`,
        removeSubCategory: (categoryId, subCategoryId) => `/categories/${categoryId}/subcategories/${subCategoryId}`,
        fetchCategoryById: (categoryId) => `/categories/${categoryId}`,
        fetchAllCategories: '/categories',
        fetchAllSubCategoryInCategoryById: (categoryId) => `/categories/${categoryId}/subcategories`,
        deleteCategoryById: (categoryId) => `/categories/${categoryId}`,
    },

    SUBCATEGORIES: {
        updateSubCategory: (subCategoryId) => `/subcategories/${subCategoryId}`,
        fetchSubCategoryById: (subCategoryId) => `/subcategories/${subCategoryId}`,
        fetchAllSubCategories: '/subcategories',
        deleteSubCategoryById: (subCategoryId) => `/subcategories/${subCategoryId}`,
        fetchArticleFromSubCategoryById: (subCategoryId) => `/subcategories/${subCategoryId}/articles`,
        addArticleToSubCategory: (subCategoryId) => `/subcategories/${subCategoryId}/articles`,
    },
    
    ARTICLES: {
        updateArticle: (articleId) => `/articles/${articleId}`,
        addImageToArticle: (articleId) => `/articles/${articleId}/images`,
        removeImageFromArticle: (articleId, imageId) => `/articles/${articleId}/images/${imageId}`,
        fetchArticleById: (articleId) => `/articles/${articleId}`,
        fetchAllArticles: '/articles',
        deleteArticleById: (articleId) => `/articles/${articleId}`,
        fetchImageFromArticle : (articleId , imageIndex) => `/articles/${articleId}/images/${imageIndex}`,
    },
    
    ORDER : {
        createOrder : '/orders',
        fetchOrderById : (orderId) => `/orders/${orderId}`,
        fetchAllOrders : '/orders',
        fetchAllOrdersByUser : (userId) => `/orders/users/${userId}`,
        finishOrder : (orderId) => `/orders/${orderId}`,
    },
    
};