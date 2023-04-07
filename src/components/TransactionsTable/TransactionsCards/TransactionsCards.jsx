import css from './TransactionsCards.module.css';
import { nanoid } from 'nanoid';
import { numberNormalize } from 'helpers/numberNormalize';

export const TransactionsCards = function ({ dataArr }) {
  return dataArr.map(item => (
    <ul
      key={nanoid()}
      className={`${css.transactionList} ${
        item.type === '+' ? css.income : css.expense
      }`}
    >
      <li className={css.transactionItem}>
        <span className={css.transactionName} as="span">
          Date
        </span>
        <span className={css.transactionValue} as="span">
          {item.transactionDate}
        </span>
      </li>
      <li className={css.transactionItem}>
        <span className={css.transactionName} as="span">
          Type
        </span>
        <span className={css.transactionValue} as="span">
          {item.type}
        </span>
      </li>
      <li className={css.transactionItem}>
        <span className={css.transactionName} as="span">
          Category
        </span>
        <span className={css.transactionValue} as="span">
          {/* {item.categoryId} */}
          {item.category}
        </span>
      </li>
      <li className={css.transactionItem}>
        <span className={css.transactionName} as="span">
          Comment
        </span>
        <span className={css.transactionValue} as="span">
          {item.comment}
        </span>
      </li>
      <li className={css.transactionItem}>
        <span className={css.transactionName} as="span">
          Sum
        </span>
        <span className={`${css.transactionValue} ${css.balance}`} as="span">
          {numberNormalize(item.amount)}
        </span>
      </li>
      <li className={css.transactionItem}>
        <span className={css.transactionName} as="span">
          Balance
        </span>
        <span className={css.transactionValue} as="span">
          {numberNormalize(item.balanceAfter)}
        </span>
      </li>
    </ul>
  ));
};
