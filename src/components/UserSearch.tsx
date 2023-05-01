import React from 'react';
import { API_URL } from '../container/commas';

import Map from '../container/common/Map';

const Button = React.lazy(() => import('../container/common/Button'));
const Form = React.lazy(() => import('../container/common/Form'));
const Img = React.lazy(() => import('../container/common/Img'));

interface User {
  login: string | undefined;
  avatar_url: string | undefined;
  html_url: string | undefined;
};

const UserSearch: React.FC = (): JSX.Element => {
  // 👇️ pass empty string as initial value
  const [query, setQuery] = React.useState<string>('');
  const [results, setResults] = React.useState<User[]>([]);

  async function fetchResults(query: string): Promise<User[]> {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (error: any) {
      throw new Error(error.message);
    };
  };

  /**
   * Here we restrict all handleSubmits to be exclusively on
   * HTMLFormElement Elements
   *
   * We're using `FormEventHandler` as type for the event.
   * with `HTMLFormElement` as a type parameter.
   * It contains properties an event can have
   * and methods (such as `preventDefault` an others).
   * be fired on an HTML <button> element.
   **/
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event?.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  };

  /**
   * Here we restrict all handleChanges to be exclusively on
   * HTMLInputElement Elements
   *
   * We're using `ChangeEvent` as type for the event.
   * with `HTMLInputElement` as a type parameter.
   * It contains properties an event can have
   * and methods (such as `preventDefault` an others).
   **/
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // 👇️ prevent page refresh
    event?.preventDefault();
    /*
     *
     * Here, 'EventTarget & HTMLInputElement' is a type that represents an object that can be both an
     * 'EventTarget' and an 'HTMLInputElement'.
     *
     * The 'value' property is specific to 'HTMLInputElement' objects, which  means that it may not
     * exist on all objects that implement the 'EventTarget' interface.
     *
     */
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    setQuery(inputValue);
  };

  /*
   * This function takes an element of type `User` and an index of type `number` as parameters.
   */
  function renderMyDataItem(element: User, index: number): React.ReactNode {
    /*
     *
     * The function returns a React node that renders the markup for the given `User` element.
     *
     * A `div` element is rendered with a class of `"card"`.
     * The `key` attribute is set to the `element.login` value if it exists, otherwise it is
     * set to the `index` value.
     *
     */
    return (
      <div className='card' key={element.login ? element.login : index}>
        <Img src={element.avatar_url} alt={element.login} ImageId='cardImage' />
        <a href={element.html_url} target='_blank' rel='noopener noreferrer'>
          <Button
            buttonText='GitHub'
            className='fa-brands fa-github'
            id='card-button'
          />
        </a>
      </div>
    );
  };

  /*
   * 👇️type assertion
   * ✅ value={query as string}
   */
  return (
    <React.Fragment>
      <div className='userSearchMain'>
        <div className='userSearchHeading'>GitHub User Search</div>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={query}
          InputId='userSearchInput'
          className='fa-solid fa-magnifying-glass'
          ButtonId='userSearchButton'
        />
      </div>
      <Map data={results} renderItem={renderMyDataItem} />
    </React.Fragment>
  );
};

export default UserSearch;