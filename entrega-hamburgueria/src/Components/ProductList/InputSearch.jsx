import { Form } from "./inputSearch";

export const InputSearch = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <input
        className="inputSearch"
        type="text"
        placeholder="Digitar pesquisa"
        id="description"
        // value={userInputDescription}
        //onChange={(event) => setUserInputDescription(event.target.value)} //evento onChange captura value do input e atualiza o state
      />
      <button className="buttonSearch" onClick={"olá"} type="submit">
        Pesquisar
      </button>
    </Form>
  );
};
