import { useState } from "react";

const EditProfile = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  };

  const handleContactChange = (contactField, value) => {
    setEditedUser({
      ...editedUser,
      contacts: { ...editedUser.contacts, [contactField]: value },
    });
  };

  const handleSave = () => {
    onSave(editedUser); // Pass updated data back to the parent component
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Редактировать профиль</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="space-y-4"
      >
        {/* Name */}
        <div>
          <label className="block text-gray-700">Имя</label>
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-700">Возраст</label>
          <input
            type="text"
            value={editedUser.age}
            max={50}
            min={18}
            onChange={(e) => handleInputChange("age", Number(e.target.value.length > 2 ? editedUser.age :  e.target.value.replace(/[^0-9]/g, "")))}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Contacts */}
        <div>
          <label className="block text-gray-700">Контакты</label>
          {Object.keys(user.contacts).map((key) => (
            <div key={key} className="mb-2">
              <label className="block text-sm text-gray-600 capitalize">
                {key}:
              </label>
              <input
                type="text"
                value={editedUser.contacts[key]}
                onChange={(e) => handleContactChange(key, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
        </div>

        {/* Height and Weight */}
        <div className="flex gap-4">
          <div>
            <label className="block text-gray-700">Рост (см)</label>
            <input
              type="number"
              value={editedUser.height}
              max={200}
              min={110}
              onChange={(e) => handleInputChange("height", Number(e.target.value.length > 3 ? editedUser.height :  e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Вес (кг)</label>
            <input
              type="number"
              value={editedUser.weight}
              max={100}
              min={50}
              onChange={(e) => handleInputChange("weight", Number(e.target.value.length > 3 ? editedUser.weight :  e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Marital Status */}
        <div>
          <label className="block text-gray-700">Семейное положение</label>
          <select
            value={editedUser.maritalStatus}
            onChange={(e) => handleInputChange("maritalStatus", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Разведен(а)">Разведен(а)</option>
            <option value="Холост/Не замужем">Холост/Не замужем</option>
            <option value="Женат/Замужем">Женат/Замужем</option>
          </select>
        </div>

        {/* Ready to Move */}
        <div>
          <label className="block text-gray-700">Готовы ли вы к переезду?</label>
          <select
            value={editedUser.readyToMove}
            onChange={(e) => handleInputChange("readyToMove", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>
        </div>

        {/* Number of Children */}
        <div>
          <label className="block text-gray-700">Количество детей</label>
          <input
            type="text"
            min={0}
            max={10}
            value={editedUser.childrenCount}
            // onChange={(e) =>
            //   handleInputChange("childrenCount", Number(e.target.value.length > 2 ? editedUser.childrenCount : e.target.value.replace(/[^0-9]/g, "")))
            // }

            onChange={(e) => {
              let newValue = e.target.value.replace(/[^0-9]/g, "");
        
              if (newValue.length > 2) {
                newValue = newValue.slice(-2); 
              }
              if (Number(newValue) > 10) {
                newValue = newValue.slice(1); 
              }
        
              handleInputChange("childrenCount", newValue); 
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Character */}
        <div>
          <label className="block text-gray-700">Ваш характер</label>
          <select
            value={editedUser.character}
            onChange={(e) => handleInputChange("character", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Спокойный">Спокойный</option>
            <option value="Энергичный">Энергичный</option>
            <option value="Терпеливый">Терпеливый</option>
          </select>
        </div>

        {/* Religiosity */}
        <div>
          <label className="block text-gray-700">Религиозность</label>
          <div className="flex flex-col space-y-2">
            {["Совершаю все обязательные намазы", "Не умею читать Коран", "Ношу бороду"].map(
              (option, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editedUser.religiosity.includes(option)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setEditedUser((prev) => ({
                        ...prev,
                        religiosity: checked
                          ? [...prev.religiosity, option]
                          : prev.religiosity.filter((item) => item !== option),
                      }));
                    }}
                    className="mr-2"
                  />
                  {option}
                </label>
              )
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Сохранить
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
