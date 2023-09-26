import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Order</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your order with the community, let Campus Express do the
        rest for you
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Destination{" "}
            <span className=" font-normal text-xs font-roboto">
              (BUSA, Cafe, BUTH, Babrite)
            </span>
          </span>
          <input
            value={post.destination}
            onChange={(e) => setPost({ ...post, destination: e.target.value })}
            type="text"
            placeholder="BUSA"
            required
            maxLength={20}
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Location{" "}
            <span className="font-normal text-xs font-roboto">
              (Welch, Diamond, Topaz)
            </span>
          </span>
          <input
            value={post.location}
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            type="text"
            placeholder="Samuel Akande"
            required
            maxLength={20}
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Room Number{" "}
            <span className="font-normal text-xs font-roboto">
              (B15, SF17, D5)
            </span>
          </span>
          <input
            value={post.roomNumber}
            onChange={(e) => setPost({ ...post, roomNumber: e.target.value })}
            type="text"
            placeholder="SF17"
            maxLength={10}
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Phone Number{" "}
            <span className="font-normal text-xs font-roboto">
              (08146344284)
            </span>
          </span>
          <input
            value={post.phoneNumber}
            onChange={(e) => setPost({ ...post, phoneNumber: e.target.value })}
            type="text"
            placeholder="08146344284"
            required
            maxLength={12}
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Order Type{" "}
            <span className="font-normal text-xs font-roboto">
              (Breakfast, Lunch, Dinner)
            </span>
          </span>
          <input
            value={post.orderType}
            onChange={(e) => setPost({ ...post, orderType: e.target.value })}
            type="text"
            placeholder="Breakfast"
            maxLength={20}
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Prices Charges{" "}
            <span className="font-normal text-xs font-roboto">
              (Prices differ in location)
            </span>
          </span>
          <input
            value={post.price}
            onChange={(e) => setPost({ ...post, price: e.target.value })}
            type="text"
            placeholder="₦450"
            required
            maxLength={5}
            defaultValue={"200"}
            className="form_input"
          />
        </label>

        <label>
          <span className=" font-roboto font-semibold text-base text-gray-700">
            Additional Notes{" "}
            <span className="font-normal text-xs font-roboto">
              (Specific your order)
            </span>
          </span>

          <textarea
            value={post.notes}
            onChange={(e) => setPost({ ...post, note: e.target.value })}
            placeholder="Two loafs of wheat bread and 4 bottles of water"
            className="form_textarea "
            maxLength={50}
          />
        </label>

        <label>
          <span className="font-roboto font-semibold text-base text-gray-700">
            Tags{" "}
            <span className="font-normal text-xs font-roboto">
              (#breakfast, #welch, #cafe)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#akande #busa"
            maxLength={20}
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-8">
          <Link href="/" className="text-[#152244] text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-3.5 text-sm bg-[#152244] font-roboto font-normal rounded-md text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
