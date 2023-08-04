interface Props {
  textToSearch: string;
  searchText: string;
}

const HIGHLIGHT_CLASS_NAME = 'highlight';

const checkIsMatch = ({ textToSearch, searchText }: Props) => {
  if (!searchText) return false;

  return textToSearch.toLowerCase().includes(searchText.toLowerCase());
};

export const highlightIfMatch = ({ textToSearch, searchText }: Props): string => {
  return checkIsMatch({ textToSearch, searchText }) ? HIGHLIGHT_CLASS_NAME : '';
};
