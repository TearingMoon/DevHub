<template>
    <div>
        <h1>{{ WorkingSpace.Name }}</h1>
        <span>{{ WorkingSpace.ID }}</span>
        <p> {{ WorkingSpace.Description }}</p>
    </div>
</template>
<script>
import workingSpaceEntity from '@/entities/workingSpaceEntity.ts'
export default {
    name: 'WorkingSpace',
    components: {},
    props: {
        WorkingSpace: {type: workingSpaceEntity},
    }
}
</script>