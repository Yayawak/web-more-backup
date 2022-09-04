import { FC, useMemo } from 'react'

interface IInputSelectProps {
  items: { [key: string]: string }
}

const InputSelect: FC<IInputSelectProps> = ({ items }) => {
  const selected = useMemo(() => items[Object.keys(items)[0]], [items])

  return (
    <>
      <select
        defaultValue={selected}
        className={`w-full py-[8px] px-[8px] outline-none border-black border-[1px] rounded-[8px]`}
      >
        {Object.keys(items).map((item) => (
          <option key={item} value={item}>
            {items[item]}
          </option>
        ))}
      </select>
    </>
  )
}

export default InputSelect
