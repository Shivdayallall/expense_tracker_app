import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ExpensesOutput from '../component/outputExpense/ExpensesOutput';


const RecentExpence = () => {
  return <ExpensesOutput expensesPeriod='last 7 days' />;
};

export default RecentExpence;

const styles = StyleSheet.create({});
