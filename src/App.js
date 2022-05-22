import React, { useState } from "react";

import { Container } from "semantic-ui-react";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";

import "./App.css";

const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$100",
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: "$10",
    isExpense: true,
  },
  {
    id: 3,
    description: "Programing",
    value: "$1000",
    isExpense: false,
  },
];

const App = () => {
  const [entries, setEntries] = useState(initialEntries);
  console.log(entries);

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance size="small" title="Your Balance:" value="2,550.53" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
};

export default App;
