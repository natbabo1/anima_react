function TierItem({ tier, onSelect, selected }) {
  return (
    <label
      className={`block w-full pt-4 pb-4 px-4 border border-${
        selected ? "anima-green" : "low-white"
      } rounded-lg cursor-pointer`}
    >
      <input
        type="radio"
        name="tier"
        value={tier.id}
        className="hidden"
        checked={selected}
        onChange={() => onSelect(tier)}
      />
      <h2 className="block text-anima-green font-semibold text-xl">
        {tier.name}
      </h2>
      <h2 className="block text-white font-semibold text-xl mt-1">
        {tier.price} Bath
      </h2>
      <h3 className="block text-low-white mt-1">{tier.detail}</h3>
    </label>
  );
}

export default TierItem;
