import algoliasearch from "algoliasearch/lite";
import { InstantSearch, RefinementList, SearchBox } from "react-instantsearch";

const searchClient = algoliasearch(
  "3EO4EUDYLH",
  "922272b22dcf265623af20dfa2763a48",
);

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="ResourceHub">
      <RefinementList attribute="brand" />
      <SearchBox />
    </InstantSearch>
  );
}
