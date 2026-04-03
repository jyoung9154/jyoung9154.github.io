import React, { useState, useEffect } from 'react';
import { SiGithub } from "react-icons/si";
export default function GitHubProjects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://api.github.com/users/jyoung9154/repos?sort=updated&per_page=100')
            .then(res => res.json())
            .then(data => {
                if (!Array.isArray(data)) { setLoading(false); return; }
                const filtered = data
                    .filter(repo => !repo.fork && repo.name !== 'jyoung9154.github.io')
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                setRepos(filtered);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);
    if (loading) {
        return (
            <div className="flex justify-center py-16">
                <span className="text-slate-500 text-sm font-bold uppercase tracking-widest animate-pulse">GitHub 프로젝트 불러오는 중...</span>
            </div>
        );
    }
    if (!repos.length) {
        return <p className="text-slate-500 text-center py-8">공개 저장소가 없습니다.</p>;
    }
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {repos.map(repo => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                   className="block p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0DA6F2]/30 hover:bg-white/[0.07] transition-all no-underline group">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white text-lg font-bold group-hover:text-[#0DA6F2] transition-colors mb-2 truncate">{repo.name}</h4>
                            {repo.description && <p className="text-slate-400 text-sm mb-4 line-clamp-2">{repo.description}</p>}
                            <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                                {repo.language && <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#0DA6F2]"></span>{repo.language}</span>}
                                {repo.stargazers_count > 0 && <span>⭐ {repo.stargazers_count}</span>}
                                <span>{new Date(repo.updated_at).toLocaleDateString('ko-KR')}</span>
                            </div>
                        </div>
                        <SiGithub className="text-slate-600 group-hover:text-[#0DA6F2] text-xl flex-shrink-0 mt-1 transition-colors" />
                    </div>
                </a>
            ))}
        </div>
    );
}
