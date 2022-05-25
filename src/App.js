import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

import "./App.css";

const App = () => {
  const entries = useSelector((state) => state.entries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //setEntries(newEntries);
      resetEntry();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalexpenses = 0;

    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalexpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    setTotal(totalIncomes - totalexpenses);
    setExpenseTotal(totalexpenses);
    setIncomeTotal(totalIncomes);
  }, [entries]);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    //setEntries(result);
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });

    //setEntries(result);
    resetEntry();
  };

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance size="small" title="Your Balance:" value={total} />

      <DisplayBalances totalIncome={incomeTotal} totalExpenses={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} editEntry={editEntry} />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
};

export default App;
