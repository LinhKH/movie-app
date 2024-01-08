import { usePage } from '@inertiajs/vue3';
const page = usePage();

export function usePermission() {
    const hasRole = (name) => page.props.auth.user.roles.includes(name);
    const hasPermission = (name) => page.props.auth.user.permissions.includes(name);

    return { hasRole, hasPermission }
}