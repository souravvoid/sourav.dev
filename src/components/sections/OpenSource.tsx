"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, BookOpen, AlertCircle, Loader2 } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const FALLBACK_REPOS: Repo[] = [
  {
    id: 1,
    name: "Crime-Hotspot-Prediction",
    description: "Geospatial crime analysis platform for predicting hotspots and optimizing patrol routes.",
    html_url: "https://github.com/souravvoid/Crime-Hotspot-Prediction-and-Patrol-Optimization-System",
    stargazers_count: 5,
    forks_count: 2,
    language: "Python"
  },
  {
    id: 2,
    name: "Packet-Analyzer",
    description: "A low-level network traffic capture and analysis tool on Linux using raw sockets.",
    html_url: "https://github.com/souravvoid",
    stargazers_count: 3,
    forks_count: 1,
    language: "C++"
  }
];

export function OpenSource() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/souravvoid/repos?sort=updated&per_page=6");
        if (res.ok) {
          const data = await res.json();
          setRepos(data);
        } else {
          setError(true);
          setRepos(FALLBACK_REPOS);
        }
      } catch (err) {
        console.error("Failed to fetch repos", err);
        setError(true);
        setRepos(FALLBACK_REPOS);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-3">
          Open Source
          <div className="h-1 w-24 bg-primary rounded-full ml-2"></div>
        </h2>
      </header>

      <section className="mb-12">
        <p className="text-muted-foreground leading-relaxed mb-6">
          A live feed of my recent open-source activity, projects, and experiments fetched directly from GitHub.
        </p>

        {loading ? (
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-center gap-3 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin" />
            Loading repositories...
          </div>
        ) : (
          <>
            {error && (
              <div className="glass-panel p-4 mb-6 rounded-xl flex items-center gap-3 text-yellow-500/80 bg-yellow-500/10 border border-yellow-500/20 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Showing cached repositories due to GitHub API rate limits.
              </div>
            )}
            
            {repos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.map((repo) => (
                  <a 
                    key={repo.id} 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-panel p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2 group-hover:text-primary transition-colors">
                      <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      {repo.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" /> {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="glass-panel p-6 rounded-2xl flex items-center gap-3 text-muted-foreground">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                No public repositories found.
              </div>
            )}
          </>
        )}
      </section>
    </article>
  );
}
