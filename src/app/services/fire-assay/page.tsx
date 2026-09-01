export default function FireAssayPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Fire Assay Services</h1>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-4">
              Fire assay is the most accurate and globally recognized method for determining gold and silver content in ores, concentrates, and bullion.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Process</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Sample preparation and weighing</li>
              <li>Flux mixing and fusion</li>
              <li>Cupellation and parting</li>
              <li>Gravimetric analysis</li>
              <li>Certified results reporting</li>
            </ul>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Turnaround Time:</span> 24-48 hours
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Accreditation:</span> ISO 17025 Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}