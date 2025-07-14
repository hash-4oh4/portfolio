import { useState } from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_DATA } from "@/lib/constants";

export function Blog() {
  const [showAll, setShowAll] = useState(false);
  
  const posts = BLOG_DATA;
  const displayedPosts = showAll ? posts : posts.slice(0, 4);

  return (
    <section id="blog" className="content-layer py-20 bg-black/90">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <BookOpen className="inline mr-4 text-cyber-green" size={48} />
          Latest Blog Posts
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {displayedPosts.map((post) => (
              <Card key={post.id} className="cyber-border project-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-cyber-green text-sm font-mono">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 glow-text console-heading">{post.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyber-green hover:text-cyber-green/80 p-0"
                      onClick={() => {
                        // In a real app, this would navigate to the full post
                        console.log(`Reading post: ${post.title}`);
                      }}
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {posts.length > 4 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="cyber-border console-heading"
              >
                {showAll ? "Show Less" : "Show All Posts"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}