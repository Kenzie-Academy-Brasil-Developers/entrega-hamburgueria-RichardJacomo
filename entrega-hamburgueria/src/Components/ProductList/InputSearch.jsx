import { Form } from "./inputSearch";

export const InputSearch = ({ showProducts }) => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <input
        className="inputSearch"
        type="text"
        placeholder="Digitar pesquisa"
        id="description"
        onChange={(event) => showProducts(event.target.value)}
      />
      <button className="buttonSearch">Pesquisar</button>
    </Form>
  );
};
