import { HeaderLink } from '@/libs/definitions';

type makeReadonly<T> = {
   readonly [K in keyof T]: T[K];
}

type readOnlyLink = makeReadonly<HeaderLink>;

const Header : React.FC = ({}) => {
  return (
    <div>Header</div>
  )
}

export default Header