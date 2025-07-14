import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";

export function Blog() {
  const [showAll, setShowAll] = useState(false);
  
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  if (isLoading) {
    return (
      <section id="blog" className="content-layer py-20 bg-black/90 dark:bg-black/90">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text">
            <BookOpen className="inline mr-4 text-cyber-blue" size={48} />
            Latest Blog Posts
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="cyber-border">
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                      </div>
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="content-layer py-20 bg-black/90 dark:bg-black/90">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text">
            <BookOpen className="inline mr-4 text-cyber-blue" size={48} />
            Latest Blog Posts
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-400 dark:text-slate-400">Failed to load blog posts. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  const displayedPosts = showAll ? posts : posts?.slice(0, 4);

  return (
    <section id="blog" className="content-layer py-20 bg-black/90 dark:bg-black/90">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <BookOpen className="inline mr-4 text-cyber-green" size={48} />
          Latest Blog Posts
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {displayedPosts?.map((post) => (
              <Card key={post.id} className="cyber-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className={`${post.icon} text-cyber-blue mr-3`}></i>
                    <span className="text-sm text-slate-400 dark:text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyber-blue">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 dark:text-slate-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="skill-badge text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyber-blue hover:text-cyber-accent transition-colors p-0"
                    >
                      Read More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {posts && posts.length > 4 && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                className="cyber-border px-8 py-3 rounded-lg font-semibold transition-all hover:bg-cyber-blue hover:text-white"
              >
                {showAll ? 'Show Less' : 'View All Posts'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
