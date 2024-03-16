/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mHxvMTatSBa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Course Evaluation</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Your final grade will be calculated based on the following components.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Homework</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">10% of the final grade</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium">Homework 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Excellent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Good</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Below Average</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium">Homework 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Excellent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Good</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Below Average</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Midterm Exam</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">35% of the final grade</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium">Section 1: Multiple Choice</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">10%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Excellent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Good</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Below Average</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium">Section 2: Short Answer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">15%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Excellent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Good</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Below Average</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium">Section 3: Essay</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">25%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Excellent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Good</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Below Average</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Final Exam</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">55% of the final grade</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium">Final Exam</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">100%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Excellent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Good</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Below Average</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  