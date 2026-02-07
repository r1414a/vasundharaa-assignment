
const STATUS = ["ALL", "Active", "In Progress", "Completed"];
const CATEGORY = ["ANY", 'Energy', 'Infrastructure', 'Technology', 'Environment', 'Community'];
export default function AllFilters({ status, setStatus, category, setCategory, search, setSearch }) {
    return (
        <>
            <div className="flex flex-col">
                <label className="font-medium mr-2">Status:</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="px-3 h-9 rounded-md border border-[#b8b8b8] text-sm"
                >
                    {
                        STATUS.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>

            <div className="flex flex-col">
                <label className="font-medium mr-2">Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-3 h-9 rounded-md border border-[#b8b8b8] text-sm"
                >
                    {
                        CATEGORY.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>

            <div className="flex flex-col">
                <span className="font-medium mr-2">Search by project name, status, category:</span>
                <input
                    type="text"
                    placeholder="geothermal plant, completed, technology"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-3 h-9 rounded-md border border-[#b8b8b8] text-sm"
                />
            </div>
        </>
    )
}