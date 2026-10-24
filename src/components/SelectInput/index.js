import styled from "styled-components";

//외부 컴포넌트로 분리하지 않은 이유는 SelectInput에서만 사용되기 때문
//마치 이너클래스?
function Item({ children, checked, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      const max = options?.max ?? 1;

      if (answer.length >= max) {
        return;
      }

      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => item !== index));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        // props를 기준으로 JS 함수를 작성할 때 HTML 요소에 props 값이 들어간다면 {} 괄호 필요
        return (
          <Item
            key={index}
            checked={answer.includes(index)}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// Styled Component 안에 들어가는 CSS는 SCSS로 적용됨, 와우
const ItemWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] ~ span {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    border-radius: 100%;
    box-sizing: border-box;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type="checkbox"]:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type="checkbox"]:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
