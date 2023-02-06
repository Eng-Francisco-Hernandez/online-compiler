import { Container, Grid, Header } from "semantic-ui-react";

export default function Index() {
  return (
    <Container style={{ marginTop: "3em", minWidth: "90%" }}>
      <Header as="h2" dividing>
        Online compiler
      </Header>

      <Grid columns="2" stackable>
        <Grid.Column>
          <Header as="h1">Heading 1</Header>
          <Header as="h2">Heading 2</Header>
          <Header as="h3">Heading 3</Header>
          <Header as="h4">Heading 4</Header>
          <Header as="h5">Heading 5</Header>

          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
        </Grid.Column>

        <Grid.Column>
          <Header as="h2">Example body text</Header>

          <p>
            Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
          </p>
          <p>
            The following snippet of text is{" "}
            <strong>rendered as bold text</strong>.
          </p>
          <p>
            The following snippet of text is{" "}
            <em>rendered as italicized text</em>.
          </p>
          <p>
            An abbreviation of the word attribute is{" "}
            <abbr title="attribute">attr</abbr>.
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
