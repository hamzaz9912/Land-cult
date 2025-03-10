export default function Button({ text, onClick }) {
    return (
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md" onClick={onClick}>
        {text}
      </button>
    );
  }