"use client";

import { motion } from "motion/react";
import { BarChart2, Calendar, TrendingUp } from "lucide-react";

export default function History() {
  // Mock data for demonstration
  const historyItems = [
    {
      id: 1,
      date: "2024-01-15",
      plant: "Tomato",
      disease: "Bacterial Spot",
      confidence: 92,
      status: "High"
    },
    {
      id: 2,
      date: "2024-01-12",
      plant: "Potato",
      disease: "Late Blight",
      confidence: 87,
      status: "High"
    },
    {
      id: 3,
      date: "2024-01-10",
      plant: "Corn",
      disease: "Healthy",
      confidence: 95,
      status: "Healthy"
    }
  ];

  return (
    <main className="flex grow flex-col p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-forest-deep dark:to-emerald-900 min-h-[calc(100vh-8rem)]">
      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <motion.h1
            className="text-3xl font-bold text-forest-deep dark:text-emerald-200 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Scan History
          </motion.h1>
          <motion.p
            className="text-emerald-700 dark:text-emerald-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Track your plant health analysis over time
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3">
              <BarChart2 className="w-8 h-8 text-forest-mint" />
              <div>
                <p className="text-2xl font-bold text-forest-deep dark:text-emerald-200">24</p>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm">Total Scans</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-forest-mint" />
              <div>
                <p className="text-2xl font-bold text-forest-deep dark:text-emerald-200">18</p>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm">Healthy Plants</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-forest-mint" />
              <div>
                <p className="text-2xl font-bold text-forest-deep dark:text-emerald-200">6</p>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm">Issues Detected</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {historyItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'Healthy' ? 'bg-green-500' :
                    item.status === 'High' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <h3 className="font-semibold text-forest-deep dark:text-emerald-200">
                      {item.plant} - {item.disease}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm">
                      {item.date} • {item.confidence}% confidence
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Healthy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  item.status === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {item.status}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}