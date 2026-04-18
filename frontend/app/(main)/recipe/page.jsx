"use client"
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Users,
  ChefHat,
  Flame,
  Lightbulb,
  Bookmark,
  BookmarkCheck,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Download,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import Image from "next/image";
import { ClockLoader } from "react-spinners"




function RecipeContent()  {
    const searchParams = useSearchParams();
  const router = useRouter();
  const recipeName = searchParams.get("cook");

  const [recipe, setRecipe] = useState(null);
  const [recipeId, setRecipeId] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
    return(
        <div>

        </div>
    )
};


 export default function RecipePage() {
  return (  <Suspense
      fallback={
        <div className="min-h-screen bg-stone-50 pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center py-20">
            <Loader2 className="w-16 h-16 text-orange-600 animate-spin mx-auto mb-6" />
            <p className="text-stone-600">Loading recipe...</p>
          </div>
        </div>
      }
    >
      <RecipeContent />
    </Suspense>
  )
}

