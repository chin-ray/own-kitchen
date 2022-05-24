//下面这个是导入svgIcon/svg下的所有svg文件

const requireAll = requireContext => requireContext.keys().map(requireContext)

const req = require.context('./svg', false, /\.svg$/)

console.log("REQ", requireAll(req))

requireAll(req);