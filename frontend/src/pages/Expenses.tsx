import React from 'react';

const Expenses: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Expense Management</h1>
        <p className="text-gray-600">
          Add, edit, and manage your expenses here. AI will automatically categorize your expenses.
        </p>
      </div>
    </div>
  );
};

export default Expenses; 