import { JsonConvert } from 'json2typescript';
import { database } from './database';
import { Investment } from './models/investment';

interface FilterCriteria {
  field: string;
  value: string;
}
interface Pageable {
  page: number | string;
  size: number | string;
  total: number;
}

const jsonConvert: JsonConvert = new JsonConvert();
const collection = jsonConvert.deserializeArray(database.investments, Investment);

export const getAll = (): Investment[] => {
  return collection;
}

export const getById = (id: string): Investment => {
  return collection.find(item => item.id === id);
}

export const searchInvestments = (criteria: FilterCriteria[], pageable: Pageable) => {
  const page = +pageable.page || 1;
  const size = +pageable.size || 0;
  let result = {
    pageable: {
      total: 0,
      page,
      size
    },
    items: [...collection]
  };
  if (criteria && criteria.length) {
    result.items = result.items.filter(
      investment => criteria?.every((c: FilterCriteria) => investment[c.field] === c.value)
    );
  }
  result.pageable.total = result.items.length;
  if (pageable) {
    result.items = getPaginatedResult(result.items, page, size);
  }
  return result;
}

const getPaginatedResult = (data, page: number, size: number) => {
  const startIndex = (page - 1) * size;
  const endIndex = page * size;
  return data.slice(startIndex, endIndex);
}

