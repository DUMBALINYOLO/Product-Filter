import { fetchData } from './index';

const priceFilter = (start, end) => ({
  type: 'CHANGE_PRICE',
  payload: {
    start,
    end,
  },
});

const colorFilter = colors => ({
  type: 'CHANGE_COLOR',
  payload: colors,
});

const brandFilterFunction = brand => ({
  type: 'CHANGE_BRAND',
  payload: brand,
});

const brandFilter = (brand, url, pageNumber) =>
  function filterBrand(dispatch) {
    dispatch(brandFilterFunction(brand));
    return dispatch(fetchData(url, pageNumber));
  };

export { priceFilter, colorFilter, brandFilter };