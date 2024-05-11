interface UserRegisterFormProps {
  text: string;
  // value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefInput: React.FC<UserRegisterFormProps> = ({ text, value, onChange }) => {
  return (
    <div>
      <form>
        <label htmlFor="fname">{text}:</label><br />
        <input type="text" id="fname" name="fname" value={value} onChange={onChange} /><br />
      </form>
    </div>
  );
};

export default DefInput;


