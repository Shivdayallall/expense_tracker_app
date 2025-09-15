import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ExpensesSummary = ({ periodName, expenses }) => {
  const expenseSum = expenses.reduce((sum, currentExpenseItem) => {
    return sum + currentExpenseItem.amount;
  }, 0);
  return (
    <View>
      <View>
        <Text>{periodName}</Text>
        <Text>${expenseSum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({});
