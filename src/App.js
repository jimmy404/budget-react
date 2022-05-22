import React, { useState } from "react";

import { Container } from "semantic-ui-react";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

import "./App.css";

const initialEntries = [{}];

const App = () => {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance size="small" title="Your Balance:" value="2,550.53" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="Income" value="123,05" />
      <EntryLine description="Expense" value="10,05" isExpense />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
};

export default App;
