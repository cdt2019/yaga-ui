/**
 * 左侧菜单栏样式
 */
const SidebarStyleConfig = {
    expandWidth: '250px',
    collapseWith: '',
    bgcolor: "#233044",
    header: {
        height: '80px',
        bgcolor: "#233044",
    },
    item: {
        height: "40px",
        color: 'rgba(255,255,255,.8)',
        bgcolor: "rgba(255,255,255,.8)",
        hoverBgcolor: "#1e293a",
        activeBgcolor: "#1e253a",
        fontSize: 15,
        fontWeight: 'medium',
        icon: {
            fontSize:20,
        },
        activeColor: 'rgba(64, 158, 255)'
    },
    group: {
        bgcolor: "rgba(71, 98, 130, 0.2)",
        height: '30px',
        fontSize: 10,
        fontWeight: 'medium',
        opacity: 0.4
    }
}

export default SidebarStyleConfig;
