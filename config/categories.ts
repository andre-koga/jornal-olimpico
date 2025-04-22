// Define color classes for different categories
export interface CategoryConfig {
    name: string;
    color: string;
    label: string;
}

export const categories: Record<string, CategoryConfig> = {
    "matemática": {
        name: "matemática",
        color: "bg-blue-500 hover:bg-blue-600",
        label: "Matemática"
    },
    "física": {
        name: "física",
        color: "bg-amber-500 hover:bg-amber-600",
        label: "Física"
    },
    "informática": {
        name: "informática",
        color: "bg-emerald-500 hover:bg-emerald-600",
        label: "Informática"
    },
    "química": {
        name: "química",
        color: "bg-purple-500 hover:bg-purple-600",
        label: "Química"
    },
    "astronomia": {
        name: "astronomia",
        color: "bg-indigo-500 hover:bg-indigo-600",
        label: "Astronomia"
    },
    "biologia": {
        name: "biologia",
        color: "bg-green-500 hover:bg-green-600",
        label: "Biologia"
    },
    "history": {
        name: "history",
        color: "bg-orange-500 hover:bg-orange-600",
        label: "História"
    },
    "linguística": {
        name: "linguística",
        color: "bg-rose-500 hover:bg-rose-600",
        label: "Linguística"
    },
    "default": {
        name: "default",
        color: "bg-slate-500 hover:bg-slate-600",
        label: "Geral"
    }
};

// Helper function to get category configuration
export function getCategoryConfig(category: string): CategoryConfig {
    return categories[category] || categories.default;
} 