import { useTranslation } from 'react-i18next';

const Search = ({ searchTerm, setSearchTerm }) => {
  const { t } = useTranslation();

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder={t('search_placeholder')}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
