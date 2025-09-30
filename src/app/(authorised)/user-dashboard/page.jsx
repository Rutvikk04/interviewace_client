"use client";

import React, { useEffect, useState } from "react";
import API from "@/utils/API";
import moment from "moment";
import Link from "next/link";

const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/user/user-dashboard");
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[var(--color-background)] text-[var(--color-text-default)]">
      <div className="container pt-20 mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-2">
            📊 Your Quiz Progress
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Track your performance across all your quizzes.
          </p>
        </header>

        {/* Stats Cards Grid */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color-text-heading)] mb-6">
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Attempts */}
            <div className="rounded-xl p-6 shadow-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-indigo-900/30 text-indigo-400">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-[var(--color-text-heading)]">Total Attempts</h3>
              </div>
              <p className="text-3xl font-bold mb-1">{stats?.totalAttempts || 0}</p>
              <p className="text-sm text-[var(--color-muted)]">Overall quizzes taken</p>
            </div>

            {/* Average Score */}
            <div className="rounded-xl p-6 shadow-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-teal-900/30 text-teal-400">
                  <i className="fas fa-percent text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-[var(--color-text-heading)]">Average Score</h3>
              </div>
              <p className="text-3xl font-bold mb-1">{stats?.averagePercentage || 0}%</p>
              <p className="text-sm text-[var(--color-muted)]">Avg. quiz performance</p>
            </div>

            {/* Best Tech Stack */}
            <div className="rounded-xl p-6 shadow-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400">
                  <i className="fas fa-microchip text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-[var(--color-text-heading)]">Best Tech Stack</h3>
              </div>
              <p className="text-3xl font-bold mb-1">{stats?.bestTech || '-'}</p>
              <p className="text-sm text-[var(--color-muted)]">Top performing subject</p>
            </div>

            {/* Last Attempt */}
            <div className="rounded-xl p-6 shadow-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-[var(--color-text-heading)]">Last Attempt</h3>
              </div>
              <p className="text-3xl font-bold mb-1">{stats?.lastAttempt ? moment(stats?.lastAttempt).fromNow() : "-"}</p>
              <p className="text-sm text-[var(--color-muted)]">{stats?.lastAttempt ? moment(stats?.lastAttempt).format("ll, LT") : "-"}</p>
            </div>
          </div>

        </section>

        {/* Quiz History Section */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--color-text-heading)] mb-4">
            Recent Quiz Attempts
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : !stats?.history?.length ? (
            <div className="text-center text-[var(--color-muted)] py-12">
              <p className="text-xl">No quiz results found.</p>
              <p className="text-sm">Start a quiz to see your stats here.</p>
              <div className="my-2">
                <Link className="max-w-fit mx-auto font-medium text-lg text-white" href={"/quiz"}>Give Your First Test</Link>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="min-w-full divide-y divide-[var(--color-border)]">
                <thead className="bg-[var(--color-surface)]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">Tech</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">Score</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">Percentage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {stats.history.map((r, idx) => (
                    <tr key={idx} className="hover:bg-[var(--color-surface)]/80">
                      <td className="px-6 py-4 text-sm">{r.tech}</td>
                      <td className="px-6 py-4 text-sm">{r.level}</td>
                      <td className="px-6 py-4 text-sm">{r.score}/{r.total}</td>
                      <td className="px-6 py-4 text-sm">{r.percentage}%</td>
                      <td className="px-6 py-4 text-sm">{moment(r.date).format("ll, LT")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
