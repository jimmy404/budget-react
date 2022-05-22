import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import "./App.css";
import DisplayBalances from "./components/DisplayBalances";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance size="small" title="Your Balance:" value="2,550.53" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $110,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;
