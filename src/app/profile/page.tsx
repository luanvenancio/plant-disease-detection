"use client";

import { motion } from "motion/react";
import { User, Settings, Bell, Shield, LogOut } from "lucide-react";

export default function Profile() {
  return (
    <main className="flex grow flex-col p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-forest-deep dark:to-emerald-900 min-h-[calc(100vh-8rem)]">
      <motion.div
        className="max-w-2xl mx-auto w-full"
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
            Profile
          </motion.h1>
          <motion.p
            className="text-emerald-700 dark:text-emerald-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Manage your account and preferences
          </motion.p>
        </div>

        <motion.div
          className="glass rounded-xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-forest-mint dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-forest-deep dark:text-emerald-200">John Doe</h3>
              <p className="text-emerald-600 dark:text-emerald-400">john.doe@example.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { icon: Settings, label: 'Settings' },
            { icon: Bell, label: 'Notifications' },
            { icon: Shield, label: 'Privacy & Security' },
            { icon: LogOut, label: 'Sign Out', danger: true }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="glass rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
            >
              <motion.button
                className={`w-full flex items-center gap-4 p-2 rounded-lg transition-colors ${
                  item.danger
                    ? 'hover:bg-red-50 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400'
                    : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-5 h-5 text-forest-mint" />
                <span className={item.danger ? '' : 'text-forest-deep dark:text-emerald-200'}>{item.label}</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}